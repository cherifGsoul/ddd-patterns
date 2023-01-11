import ClassSize from "./class-size"
import Learner from "./learner";

export default class Course {
	#title: string
	#classSize: ClassSize
	#learners: Array<Learner> = [];

	private constructor(title: string, classSize: ClassSize) {
		this.#title = title;
		this.#classSize = classSize
	}

	public static propose(title: string, classSize: ClassSize): Course {
		return new Course(title, classSize);
	}

	public enrol(learner: Learner): void {
		if (!this.acceptEnrolments()) {
			throw new Error('class is already at capacity');
		}
		this.#learners.push(learner)
	}
	public acceptEnrolments(): boolean {
		return this.#classSize.hasMoreCapacity(this.#learners.length)
	}

	public isViable(): boolean {
		return this.#classSize.isViable(this.#learners.length);
	}

	get title(): string {
		return this.#title;
	}
}