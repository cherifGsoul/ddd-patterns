export default class Learner {
	#name: string

	private constructor(name: string) {
		this.#name = name
	}

	public static named(name: string): Learner {
		return new Learner(name);
	}
}