import { GestRoutingModule } from './gest-routing.module';

describe('GestRoutingModule', () => {
  let gestRoutingModule: GestRoutingModule;

  beforeEach(() => {
    gestRoutingModule = new GestRoutingModule();
  });

  it('should create an instance', () => {
    expect(gestRoutingModule).toBeTruthy();
  });
});
