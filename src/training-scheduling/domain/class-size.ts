export default class ClassSize {
	#min: number
	#max: number

	private constructor(min: number, max: number) {
		this.#min = min
		this.#max = max
	}

	public static between(min: number, max: number) {
		return new ClassSize(min, max)
	}

	public hasMoreCapacity(size: number) {
		return this.#max > size;
	}

	public isViable(size: number): boolean {
		return this.#min <= size;
	}
}