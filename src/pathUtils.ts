import * as path from 'path';

export function toAbsolutePaths(paths: string[], relativeTo: string) {
    return paths.map(p => !path.isAbsolute(p)
        ? path.resolve(path.dirname(relativeTo), p)
        : p);
}