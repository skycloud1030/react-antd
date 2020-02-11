function BadgeList(name) {
  return [
    {
      url: `https://travis-ci.org/skycloud1030/${name}`,
      img: `https://api.travis-ci.org/skycloud1030/${name}.svg?branch=master`,
      alt: "Travis"
    },
    {
      url: `https://coveralls.io/github/skycloud1030/${name}?branch=master`,
      img: `https://coveralls.io/repos/github/skycloud1030/${name}/badge.svg?branch=master`,
      alt: "Coverage Status"
    },
    {
      url: `https://www.npmjs.com/package/${name}`,
      img: `https://img.shields.io/npm/v/${name}.svg`,
      alt: "Version"
    },
    {
      url: `https://github.com/skycloud1030/${name}/blob/master/LICENSE`,
      img: `https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square`,
      alt: "license"
    },
    {
      url: `https://www.npmjs.com/package/${name}`,
      img: `https://img.shields.io/npm/dm/${name}.svg`,
      alt: "Donloads"
    }
  ];
}

export default BadgeList;
