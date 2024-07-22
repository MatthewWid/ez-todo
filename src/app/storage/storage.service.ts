import { Inject, Injectable, InjectionToken } from "@angular/core";

export const BROWSER_LOCAL_STORAGE = new InjectionToken<Storage>(
	"Browser Local Storage",
	{
		providedIn: "root",
		factory: () => localStorage,
	}
);

@Injectable({
	providedIn: "root",
})
export class StorageService {
	constructor(@Inject(BROWSER_LOCAL_STORAGE) private storage: Storage) {}

	get<Type>(key: string): Type | null {
		const value = this.storage.getItem(key);

		if (value) {
			return JSON.parse(value);
		}

		return null;
	}

	set(key: string, value: unknown) {
		this.storage.setItem(key, JSON.stringify(value));
	}
}
