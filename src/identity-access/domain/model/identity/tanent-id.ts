export class TanentId {
	#uuid: string

	private constructor(uuid: string) {
		this.#uuid = uuid
	}

	public static fromString(uuid: string): TanentId {
		return new TanentId(uuid);
	}
}