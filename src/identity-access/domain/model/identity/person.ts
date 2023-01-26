import { ContactInformation } from "./contact-information";
import { FullName } from "./full-name";
import { UserId } from "./user-id";

export class Person {
	#userId: UserId
	#name: FullName
	#contactInformation: ContactInformation

	private constructor(userId: UserId, name: FullName, contactInformation: ContactInformation) {
		this.#userId = userId
		this.#name = name
		this.#contactInformation = contactInformation
	}

	public changeContactInformation(contactInformation: ContactInformation) {
		this.#contactInformation = contactInformation
	}

	public changeName(name: FullName) {
		this.#name = name
	}
}