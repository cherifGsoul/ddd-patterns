import { validate } from 'uuid'

export default class CourseId {
	#uuid: string;

	private constructor(uuid: string) {
		this.#uuid = uuid;
	}

	public static fromString(uuid: string): CourseId {
		if (!validate(uuid)) {
			throw new Error('Invalid uuid for course');
		}
		return new CourseId(uuid);
	}

	public toString(): string {
		return this.#uuid;
	}

	equal(other: CourseId): boolean {
		return this.#uuid === other.#uuid
	}
}