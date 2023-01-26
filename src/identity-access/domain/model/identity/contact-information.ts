import { EmailAddress } from "./email-address"
import { PhoneNumber } from "./phone-number"
import { PostalAddress } from "./postal-address"

export class ContactInformation {
	#emailAddress: EmailAddress
	#postalAddress: PostalAddress
	#phoneNumber: PhoneNumber

	private constructor(emailAddress: EmailAddress, postalAddress: PostalAddress, phoneNumber: PhoneNumber) {
		this.#emailAddress = emailAddress
		this.#postalAddress = postalAddress
		this.#phoneNumber = phoneNumber
	}

	public static of(emailAddress: EmailAddress, postalAddress: PostalAddress, phoneNumber: PhoneNumber): ContactInformation {
		return new ContactInformation(emailAddress, postalAddress, phoneNumber)
	}

	public equals(other: ContactInformation): boolean {
		return this.#emailAddress.equals(other.#emailAddress) &&
			this.#postalAddress.equals(other.#postalAddress) && 
			this.#phoneNumber.equals(other.#phoneNumber)
	}
}