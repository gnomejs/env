export interface EnvPath extends Iterable<string> {
    get(): string;

    overwrite(path: string): void;

    split(): string[];

    has(path: string): boolean;

    append(path: string): void;

    prepend(path: string): void;

    remove(path: string): void;

    replace(oldPath: string, newPath: string): void;

    [Symbol.iterator](): IterableIterator<string>;

    toString(): string;
}

export interface Env extends Iterable<{ key: string; value: string }> {
    get values(): Record<string, string | undefined>;

    get path(): EnvPath;

    get(name: string): string | undefined;

    require(name: string): string;

    merge(env: Record<string, string | undefined>): this;

    set(name: string, value: string): this;

    has(name: string): boolean;

    remove(name: string): this;

    dump(): void;

    toObject(): Record<string, string | undefined>;

    joinPath(paths: string[]): string;
}
