const escapar = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Convierte **texto** en <strong>texto</strong>, escapando todo lo demás.
export const conNegritas = (s: string) => escapar(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
