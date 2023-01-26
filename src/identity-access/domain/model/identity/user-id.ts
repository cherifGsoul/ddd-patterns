export class UserId {
	#uuid: string

	private constructor(uuid: string) {
		this.#uuid = uuid
	}

	public static fromString(uuid: string): UserId {
		return new UserId(uuid);
	}
}