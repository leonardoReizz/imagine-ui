export const buttonVariantCodeString = `function Buttons() {
  <Button size="sm">Size SM</Button>
  <Button size="md">Size MD</Button>
  <Button size="lg">Size LG</Button>
}`;

export const buttonRippleEffectCodeString = `function Buttons() {
  <Button color="green" className="px-4 normal-case">
    Ripple ON
  </Button>
  <Button color="green" ripple={false} className="px-4 normal-case">
    Ripple OFF
  </Button>
}`;

export const buttonShadowCodeString = `function Buttons() {
  <Button variant="solid" color="green" className="px-4 normal-case">
    Shadow ON
  </Button>
  <Button color="green" className="px-4 normal-case" shadow={false}>
    Shadow OFF
  </Button>
}`;

export const buttonColorsCodeString = `function Buttons() {
  <Button color="blue" className="px-4 normal-case">
    Blue
  </Button>
  <Button color="green" className="px-4 normal-case">
    Green
  </Button>
  <Button color="red" className="px-4 normal-case">
    Red
  </Button>
  <Button color="purple" className="px-4 normal-case">
    Purple
  </Button>
}`;

export const buttonNotificationCodeString = `function Buttons() {
  <Button color="blue" className="px-4 normal-case">
    <UserIcon className="w-4 h-4" /> 
    User
  </Button>
  <Button color="green" className="px-4 normal-case">
    Settings
    <Cog6ToothIcon className="w-4 h-4" />
  </Button>
  <Button color="red" className="px-4 normal-case">
    Notification
    <BellAlertIcon className="w-4 h-4" />
  </Button>
}`;
