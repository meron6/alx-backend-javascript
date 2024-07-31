// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // Brand property to uniquely identify the interface
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // Brand property to uniquely identify the interface
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}

// Example usage
const major1: MajorCredits = { credits: 30, brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 20, brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 15, brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 25, brand: 'MinorCredits' };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log('Total Major Credits:', totalMajor);
console.log('Total Minor Credits:', totalMinor);
