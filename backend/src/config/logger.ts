type LogMethod = (...args: unknown[]) => void;

const getConsoleMethod = (method: 'log' | 'warn' | 'error' | 'debug'): LogMethod => {
  const g = globalThis as any;
  const candidate = g.console?.[method];
  return typeof candidate === 'function' ? candidate.bind(g.console) : () => undefined;
};

export const logger = {
  info: getConsoleMethod('log'),
  warn: getConsoleMethod('warn'),
  error: getConsoleMethod('error'),
  debug: getConsoleMethod('debug')
};
