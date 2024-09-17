export interface Course {
  courseCode: string;
  courseName: string;
  courseType: string;
  coursePeriod: string;
  credits: {
    Lecture: number;
    Tutorial: number;
    Practical: number;
    Project: number;
  };
  courseOutcomes: string[];
  coursesMapped: string[];
}
