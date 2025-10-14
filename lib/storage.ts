export class Storage {

    key: string

    constructor(key: string) {
        this.key = key;
    }

    private isAvailable() {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }

    get(key: string) {
        return this.isAvailable() && localStorage.getItem(this.key + '-' + key);
    }

    getObject(key: string) {
        if (!this.isAvailable()) {
            return;
        }

        const item = this.get(key) || "";

        try {
            return JSON.parse(item);
        } catch {
            return null;
        }
    }

    set(key: string, value: any) {
        this.isAvailable() && localStorage.setItem(this.key + '-' + key, value)
    }

    setObject<T extends object>(key: string, value: T) {
        this.isAvailable() && this.set(key, JSON.stringify(value));
    }

    remove(key: string) {
        this.isAvailable() && localStorage.removeItem(this.key + '-' + key);
    }

    getAllValues() {
        if (!this.isAvailable()) {
            return;
        }

        const results = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i) || "";

            key.startsWith(this.key + '-') && results.push(localStorage.getItem(key));
        }

        return results;
    }
}