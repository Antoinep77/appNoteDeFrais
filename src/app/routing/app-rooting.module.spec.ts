import { AppRootingModule } from './app-rooting.module';

describe('AppRootingModule', () => {
  let appRootingModule: AppRootingModule;

  beforeEach(() => {
    appRootingModule = new AppRootingModule();
  });

  it('should create an instance', () => {
    expect(appRootingModule).toBeTruthy();
  });
});
