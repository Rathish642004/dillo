'use client';

import { useState, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  folder?: string;
}

export default function ImageUpload({ value, onChange, folder = 'general' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError('');
    setUploading(true);
    try {
      const ext = file.name.split('.').pop();
      const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const supabase = createClient();
      const { error: uploadError } = await supabase.storage
        .from('dillo-images')
        .upload(path, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from('dillo-images').getPublicUrl(path);
      onChange(data.publicUrl);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {value ? (
        <div style={{ position: 'relative', width: '100%', maxWidth: 200 }}>
          <img
            src={value} alt="Uploaded"
            style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}
          />
          <button
            type="button"
            onClick={() => onChange('')}
            style={{
              position: 'absolute', top: 4, right: 4,
              background: 'var(--dillo-red-500)', border: 'none', borderRadius: '50%',
              width: 24, height: 24, cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', color: '#fff',
            }}
          >
            <X size={12} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => !uploading && inputRef.current?.click()}
          style={{
            width: '100%', height: 80, border: '2px dashed var(--border-default)',
            borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 6, cursor: uploading ? 'wait' : 'pointer',
            background: 'var(--bg-page-alt)', color: 'var(--text-muted)',
            transition: 'border-color 150ms',
          }}
        >
          {uploading ? (
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13 }}>Uploading…</span>
          ) : (
            <>
              <Upload size={18} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13 }}>Click to upload</span>
            </>
          )}
        </div>
      )}
      <input
        ref={inputRef} type="file" accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {error && (
        <span style={{ color: 'var(--dillo-red-500)', fontSize: 12, fontFamily: 'var(--font-body)' }}>
          {error}
        </span>
      )}
    </div>
  );
}
