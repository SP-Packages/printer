import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Printer } from '../../src/core/printer';

describe('Printer', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'info').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should handle success messages', async () => {
    vi.spyOn(Printer, 'success'); // Spy on the method before execution
    process.argv = ['node', 'index.js', 'success', 'Operation successful'];
    await import('../../src/bin/index');
    expect(Printer.success).toHaveBeenCalledWith('Operation successful');
  });
});
