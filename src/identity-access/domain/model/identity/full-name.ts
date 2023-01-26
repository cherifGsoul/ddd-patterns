/**
 * @description personal full name value object
 */
export class FullName {
	#firstName: string
	#lastName: string

	private constructor(firstName: string, lastName: string) {
		this.#firstName = firstName
		this.#lastName = lastName
	}

	public static of(firstName: string, lastName: string): FullName {
		return new FullName(firstName, lastName)
	}

	public equals(other: FullName): boolean {
		return this.#firstName === other.#firstName &&
			this.#lastName === other.#lastName
	}

	public toString(): string {
		return `${this.#firstName} ${this.#lastName}`
	}
}