import java.util.ArrayList;
import java.util.List;

public class StudentUtil {

    // Method to get students by location
    public static List<Student> getStudentsByLocation(List<Student> students, String city) {
        List<Student> filteredStudents = new ArrayList<>();

        if (students != null) {
            for (Student student : students) {
                if (student.getLocation().equals(city)) {
                    filteredStudents.add(student);
                }
            }
        }

        return filteredStudents;
    }

    public static void main(String[] args) {
        // Example usage
        List<Student> students = new ArrayList<>();
        students.add(new Student(1, "Guillaume", "San Francisco"));
        students.add(new Student(2, "James", "Columbia"));
        students.add(new Student(5, "Serena", "San Francisco"));

        List<Student> studentsInSF = getStudentsByLocation(students, "San Francisco");
        for (Student student : studentsInSF) {
            System.out.println(student);
        }
    }
}
