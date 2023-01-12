import {Given, Then, When} from '@cucumber/cucumber'
import assert from 'assert';
import ClassSize from '../../src/domain/class-size';
import Course from '../../src/domain/course'
import Learner from '../../src/domain/learner';

Given('{string} was proposed with a class size of {int} to {int} people', function (title: string, min: number, max: number) {
    // Given('{string} was proposed with a class size of {int} to {float} people', function (string, int, float) {
    // Given('{string} was proposed with a class size of {float} to {int} people', function (string, float, int) {
    // Given('{string} was proposed with a class size of {float} to {float} people', function (string, float, float2) {
      // Write code here that turns the phrase above into concrete actions
    this.course = Course.propose(title, ClassSize.between(min, max))
});

When('only {string} enrols on this course', function (learner: string) {
  // Write code here that turns the phrase above into concrete actions
  this.course.enrol(Learner.named(learner))
});

Then('this course will not be viable', function () {
  // Write code here that turns the phrase above into concrete actions
  assert(!this.course.isViable())
});

Given('{string} has already enrolled on this course', function (learner: string) {
  // Write code here that turns the phrase above into concrete actions
  this.course.enrol(learner)
});

When('{string} enrols on this course', function (learner: string) {
  // Write code here that turns the phrase above into concrete actions
  this.course.enrol(learner)
});

Then('this course will be viable', function () {
  // Write code here that turns the phrase above into concrete actions
  assert(this.course.isViable())
});

Given('{string}, {string} and {string} have already enrolled on this course', function (learner1: string, learner2: string, learner3: string) {
  // Write code here that turns the phrase above into concrete actions
  this.course.enrol(Learner.named(learner1))
  this.course.enrol(Learner.named(learner2))
  this.course.enrol(Learner.named(learner3))
});

When('{string} tries to enrol on this course', function (learner: string) {
  // Write code here that turns the phrase above into concrete actions
  try {
    this.course.enrol(Learner.named(learner))
  } catch(e: any) {
    this.enrolmentProblem = e;
  }
});

Then('he should not be able to enrol', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.ok(this.enrolmentProblem)
});