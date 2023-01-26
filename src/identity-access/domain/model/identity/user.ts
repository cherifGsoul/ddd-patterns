import { ContactInformation } from "./contact-information"
import { Enablment } from "./enablment"
import { FullName } from "./full-name"
import { PasswordEncoder } from "./password-encoder"
import { Person } from "./person"
import { TanentId } from "./tanent-id"
import { UserId } from "./user-id"

export class User {
	#id: UserId
	#tanentId: TanentId
	#person: Person
	#enablment: Enablment
	#username: string
	#password: string

	private constructor(id: UserId, tanentId: TanentId, person: Person, enablment: Enablment, username: string, password: string) {
		this.#id = id
		this.#tanentId = tanentId
		this.#person = person
		this.#enablment = enablment
		this.#username = username
		this.#password = password
	}
	

	public static register(id: UserId, tanentId: TanentId, person: Person, enablement: Enablment, username: string, password: string, passwordEncoder: PasswordEncoder): User {
		return new User(id, tanentId, person, enablement, username, passwordEncoder.encode(password))
	}

	public changePassword(currentPassword: string, changedPassword: string, passwordEncoder: PasswordEncoder): void {
		if (currentPassword === changedPassword) {
			throw new Error('new password must be different than the current one')
		}
		this.#password = passwordEncoder.encode(changedPassword)
	}

	public changePersonalContactInformation(contactInformation: ContactInformation): void {
		this.#person.changeContactInformation(contactInformation)
	}

	public changePersonalName(name: FullName): void {
		this.#person.changeName(name);
	}

	public isEnabled(): boolean {
		return this.#enablment.isStillEnabled();
	}
}