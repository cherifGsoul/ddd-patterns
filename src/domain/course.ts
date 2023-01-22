import ClassSize from "./class-size"
import CourseId from "./course-id";
import Learner from "./learner";

export default class Course {
	#id: CourseId;
	#title: string
	#classSize: ClassSize
	#learners: Array<Learner> = [];

	private constructor(id: CourseId, title: string, classSize: ClassSize) {
		this.#id = id;
		this.#title = title;
		this.#classSize = classSize
	}

	public static propose(id: CourseId, title: string, classSize: ClassSize): Course {
		return new Course(id, title, classSize);
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

	public equal(other: Course): boolean {
		return this.#id.equal(other.id);
	}

	get title(): string {
		return this.#title;
	}

	get id(): CourseId {
		return this.#id;
	}
}