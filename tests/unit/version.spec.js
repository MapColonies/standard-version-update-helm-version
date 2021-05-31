const yaml = require('js-yaml');
const fs = require('fs');
const version = require('../../src/version');

describe('version', () => {
  let spec;
  let specString;
  beforeAll(() => {
    specString = fs.readFileSync(`${process.cwd()}/tests/chart.yml`, 'utf-8');
    spec = yaml.load(specString);
  });
  describe('#readVersion', () => {
    test('it should equal to the version in the spec', () => {
      expect(version.readVersion(specString)).toEqual(spec.version);
    });
  });
  describe('#writeVersion', () => {
    test('it should update the spec file with version equal to avi', () => {
      const newVersion = 'avi';
      const newSpecString = version.writeVersion(specString, newVersion);
      expect(yaml.load(newSpecString).version).toEqual(newVersion);
    });
  });
});
