import { IconSvgModule } from './icon-svg.module';

describe('IconSvgModule', () => {
  let iconSvgModule: IconSvgModule;

  beforeEach(() => {
    iconSvgModule = new IconSvgModule();
  });

  it('should create an instance', () => {
    expect(iconSvgModule).toBeTruthy();
  });
});
