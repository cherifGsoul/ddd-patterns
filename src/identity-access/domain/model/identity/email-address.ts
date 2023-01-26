export class EmailAddress {
	#address: string

	private constructor(address: string) {
		this.#address = address
	}

	public static fromString(address: string): EmailAddress {
		return new EmailAddress(address)
	}

	public equals(other: EmailAddress): boolean {
		return this.#address === other.#address
	}

	public toString(): string {
		return this.#address
	}
}