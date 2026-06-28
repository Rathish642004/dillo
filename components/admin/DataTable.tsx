'use client';

import { Pencil, Trash2 } from 'lucide-react';

export interface Column<T> {
  key: string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  onEdit: (row: T) => void;
  onDelete: (row: T) => void;
  loading?: boolean;
}

export default function DataTable<T extends { id: string }>({
  columns, data, onEdit, onDelete, loading,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            height: 52, background: 'var(--bg-page-alt)', borderRadius: 'var(--radius-md)',
            animation: 'pulse 1.5s ease-in-out infinite',
          }} />
        ))}
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div style={{
        padding: '40px 24px', textAlign: 'center', color: 'var(--text-muted)',
        fontFamily: 'var(--font-body)', fontSize: 14, background: 'var(--bg-page-alt)',
        borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)',
      }}>
        No records yet.
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }} className="dt-desktop">
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--surface-card)' }}>
          <thead>
            <tr style={{ background: 'var(--bg-page-alt)', borderBottom: '1px solid var(--border-default)' }}>
              {columns.map((col) => (
                <th key={col.key} style={{
                  padding: '12px 16px', textAlign: 'left',
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
                  color: 'var(--text-secondary)', textTransform: 'uppercase',
                  letterSpacing: '0.08em', whiteSpace: 'nowrap',
                }}>
                  {col.label}
                </th>
              ))}
              <th style={{ padding: '12px 16px', width: 100 }} />
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.id} style={{
                borderBottom: idx < data.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                transition: 'background 100ms',
              }}>
                {columns.map((col) => (
                  <td key={col.key} style={{
                    padding: '12px 16px', fontFamily: 'var(--font-body)', fontSize: 14,
                    color: 'var(--text-primary)', verticalAlign: 'middle',
                  }}>
                    {col.render ? col.render(row) : String((row as Record<string, unknown>)[col.key] ?? '')}
                  </td>
                ))}
                <td style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => onEdit(row)}
                      style={{
                        background: 'var(--dillo-navy-50)', border: 'none', borderRadius: 'var(--radius-md)',
                        padding: '6px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                        fontFamily: 'var(--font-heading)', fontSize: 12, fontWeight: 600,
                        color: 'var(--dillo-navy-500)',
                      }}
                    >
                      <Pencil size={12} /> Edit
                    </button>
                    <button
                      onClick={() => onDelete(row)}
                      style={{
                        background: 'var(--dillo-red-50)', border: 'none', borderRadius: 'var(--radius-md)',
                        padding: '6px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                        fontFamily: 'var(--font-heading)', fontSize: 12, fontWeight: 600,
                        color: 'var(--dillo-red-500)',
                      }}
                    >
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="dt-mobile">
        {data.map((row) => (
          <div key={row.id} style={{
            background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)', padding: '16px',
          }}>
            {columns.map((col) => (
              <div key={col.key} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: 'var(--text-secondary)', minWidth: 90 }}>
                  {col.label}:
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)' }}>
                  {col.render ? col.render(row) : String((row as Record<string, unknown>)[col.key] ?? '')}
                </span>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button onClick={() => onEdit(row)} style={{ flex: 1, padding: '8px', background: 'var(--dillo-navy-50)', border: 'none', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: 'var(--dillo-navy-500)', cursor: 'pointer' }}>
                Edit
              </button>
              <button onClick={() => onDelete(row)} style={{ flex: 1, padding: '8px', background: 'var(--dillo-red-50)', border: 'none', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: 'var(--dillo-red-500)', cursor: 'pointer' }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .dt-mobile { display: none; }
        @media (max-width: 640px) {
          .dt-desktop { display: none; }
          .dt-mobile { display: flex; }
        }
      `}</style>
    </>
  );
}
