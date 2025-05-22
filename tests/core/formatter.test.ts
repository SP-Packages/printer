import { describe, it, expect, vi } from 'vitest';
import { sanitizeMessage, formatMessage } from '../../src/core/formatter';
import stripAnsi from 'strip-ansi';

vi.mock('strip-ansi', () => ({
  default: vi.fn((msg) => msg)
}));

describe('Formatter Module', () => {
  describe('detectEnvironment', () => {
    it('should detect CI environment', async () => {
      process.env.CI = 'true';
      const { detectEnvironment } = await import('../../src/core/formatter');
      expect(detectEnvironment()).toBe('ci');
      delete process.env.CI;
    });

    it('should detect VSCode environment', async () => {
      process.env.TERM_PROGRAM = 'vscode';
      const { detectEnvironment } = await import('../../src/core/formatter');
      expect(detectEnvironment()).toBe('vscode');
      delete process.env.TERM_PROGRAM;
    });

    it('should detect terminal environment', async () => {
      const { detectEnvironment } = await import('../../src/core/formatter');
      expect(detectEnvironment()).toBe('terminal');
    });
  });

  describe('sanitizeMessage', () => {
    it('should strip ANSI codes in CI environment', () => {
      process.env.CI = 'true';
      const message = '\u001b[31mHello\u001b[39m';
      expect(sanitizeMessage(message)).toBe(stripAnsi(message));
      delete process.env.CI;
    });

    it('should not strip ANSI codes in terminal environment', () => {
      const message = '\u001b[31mHello\u001b[39m';
      expect(sanitizeMessage(message)).toBe(message);
    });
  });

  describe('formatMessage', () => {
    it('should format message with info type', () => {
      const message = 'This is an info message';
      const formattedMessage = formatMessage('info', message);
      expect(formattedMessage).toContain('ℹ');
      expect(formattedMessage).toContain('[INFO]');
      expect(formattedMessage).toContain(message);
    });

    it('should format message with success type', () => {
      const message = 'This is a success message';
      const formattedMessage = formatMessage('success', message);
      expect(formattedMessage).toContain('✅');
      expect(formattedMessage).toContain('[SUCCESS]');
      expect(formattedMessage).toContain(message);
    });

    it('should format message with warning type', () => {
      const message = 'This is a warning message';
      const formattedMessage = formatMessage('warning', message);
      expect(formattedMessage).toContain('⚠');
      expect(formattedMessage).toContain('[WARNING]');
      expect(formattedMessage).toContain(message);
    });

    it('should format message with error type', () => {
      const message = 'This is an error message';
      const formattedMessage = formatMessage('error', message);
      expect(formattedMessage).toContain('❌');
      expect(formattedMessage).toContain('[ERROR]');
      expect(formattedMessage).toContain(message);
    });
  });
});
