import ClassSize from "../domain/class-size";
import Course from "../domain/course";
import Courses from "../domain/courses";
import Learner from "../domain/learner";

export default class CourseEnrolments {
	#courses: Courses;

	constructor(courses: Courses) {
		this.#courses = courses;
	}

	public async propose(title: string, min: number, max: number): Promise<void> {
		const course = Course.propose(this.#courses.nextIdentity(), title, ClassSize.between(min, max))
		await this.#courses.persist(course);
	}

	public async enrol(learner: string, title: string): Promise<void> {
		const course: Course = await this.#courses.forTitle(title)
		try {
			course.enrol(Learner.named(learner));
		} catch (error: any) {
			throw new Error(error.message)
		}
		this.#courses.persist(course);
	}

	public async isCourseViable(title: string): Promise<boolean> {
		const course: Course = await this.#courses.forTitle(title);
		return course.isViable();
	}
}