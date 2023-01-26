export class PhoneNumber {
	#number: string

	private constructor(number: string) {
		this.#number = number
	}

	public static fromString(number: string): PhoneNumber {
		return new PhoneNumber(number)
	}

	public equals(other: PhoneNumber): boolean {
		return this.#number === other.#number
	}
}