// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [

  {
    title: 'Deep Learning',
    competency: 4.5,
    category: ['Machine Learning'],
  },
  {
    title: 'Linux',
    competency: 4.5,
    category: ['Operating Systems'],
  },
  {
    title: 'OS Development',
    competency: 4.5,
    category: ['Operating Systems'],
  },
  {
    title: 'Nvidia CUDA',
    competency: 4,
    category: ['Machine Learning', 'Parallel Computing', 'Tools', 'Nvidia'],
  },
  {
    title: 'Nvidia cuDNN',
    competency: 3,
    category: ['Machine Learning', 'Parallel Computing', 'Tools', 'Nvidia'],
  },
  {
    title: 'Nvidia CUPTI',
    competency: 5,
    category: ['Parallel Computing', 'Tools', 'Nvidia'],
  },
  {
    title: 'Nvidia NVML',
    competency: 5,
    category: ['Parallel Computing', 'Tools', 'Nvidia'],
  },
  {
    title: 'Nvidia Profiler Suite',
    competency: 5,
    category: ['Parallel Computing', 'Tools', 'Nvidia'],
  },
  {
    title: 'GCC',
    competency: 4,
    category: ['Tools', 'Compilers'],
  },
  {
    title: 'LLVM',
    competency: 4.5,
    category: ['Tools', 'Compilers'],
  },
  {
    title: 'TVM',
    competency: 5,
    category: ['Tools', 'Compilers', 'Machine Learning', 'Parallel Computing'],
  },
  {
    title: 'Technical Writing',
    competency: 4,
    category: ['Other'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'React',
    competency: 2.5,
    category: ['Web Development'],
  },
  {
    title: 'Angular',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'LaTeX',
    competency: 5,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 3.5,
    category: ['Tools', 'Databases'],
  },
  {
    title: 'MySQL',
    competency: 3.5,
    category: ['Tools', 'Databases'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Systems Design',
    competency: 5,
    category: ['Other'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Tools', 'Cluster Computing', 'Parallel Computing'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Cluster Computing', 'Parallel Computing'],
  },
  {
    title: 'NumPy',
    competency: 3.5,
    category: ['Tools'],
  },
  {
    title: 'Tensorflow',
    competency: 4,
    category: ['Machine Learning', 'Tools'],
  },
  {
    title: 'Pytorch',
    competency: 4,
    category: ['Machine Learning', 'Tools'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Typescript',
    competency: 2.5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML5 + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'WordPress',
    competency: 2.5,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'x86 Assembly',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 3.5,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4.5,
    category: ['Other'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Matplotlib',
    competency: 3.5,
    category: ['Tools'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Tools', 'Machine Learning'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
