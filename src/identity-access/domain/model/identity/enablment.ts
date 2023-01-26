export class Enablment {
	#enabled: boolean
	#from?: Date
	#to?: Date

	private constructor(enabled: boolean, from?: Date, to?: Date) {
		this.#enabled = enabled
		this.#from = from
		this.#to = to
	}

	public static enabledFromTo(from: Date, to: Date): Enablment {
		return new Enablment(true, from, to)
	}

	public static disabled(): Enablment {
		return new Enablment(false)
	}

	public isEnabled(): boolean {
		return this.#enabled 
	}

	public isStillEnabled(): boolean {
		return this.isEnabled() && this.dateExpired()
	}

	public dateExpired(): boolean {
		/**
		 * @TODO some date comparaison and checking
		 */
		return true
	}

}