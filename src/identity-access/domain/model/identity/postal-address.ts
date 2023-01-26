export class PostalAddress {
	#city: string
	#countryCode: string;
    #postalCode: string;
    #stateProvince: string;
    #streetAddress: string;

	private constructor(city: string, countryCode: string, postalCode: string, stateProvince: string, streetAddess: string) {
		this.#city = city
		this.#countryCode = countryCode
		this.#postalCode = postalCode
		this.#stateProvince = stateProvince
		this.#streetAddress = streetAddess
	}

	public static of(city: string, countryCode: string, postalCode: string, stateProvince: string, streetAddess: string): PostalAddress {
		return new PostalAddress(city, countryCode, postalCode, stateProvince, streetAddess)
	}

	public equals(other: PostalAddress): boolean {
		return this.#city === other.#city &&
			this.#countryCode === other.#countryCode &&
			this.#postalCode === other.#postalCode &&
			this.#stateProvince === other.#stateProvince &&
			this.#streetAddress === other.#streetAddress
	}
}