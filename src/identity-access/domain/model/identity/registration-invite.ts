import { TanentId } from "./tanent-id"

export class RegistrationInvite {
	#id: string
	#tanentId: TanentId
	#description: string
	#startAt: Date
	#expireAt: Date

	constructor(id: string, tanentId: TanentId, description: string, startAt: Date, expireAt: Date) {
		this.#id = id
		this.#tanentId = tanentId
		this.#description = description
		this.#startAt = startAt
		this.#expireAt = expireAt
	}


	isAvailable(): boolean {
		return true
	}
	isIdentifiedBy(id: string): boolean {
		return true
	}

}