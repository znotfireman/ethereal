---
template: reference.html
---

<!-- This file was @generated by `lune run scripts/docgen` and is not intended for manual editing. -->

# Ethereal for Plugins
APIs for creating new tools and interacting with the Ethereal plugin.

**Summary:**

- **Ethereal:** Entry point to the Ethereal for Plugins package.
- **Lib:** Tool library.
Every Tool `init` function receives the `Lib`, which enables interacting
with the current selected tower and the Ethereal plugin.
Certain APIs require permissions requested from `Ethereal.permission` or
`Ethereal.tryPermission`.


**Packages:**

- :ethereal-pesde: pesde — [`@znotfireman/ethereal_for_plugins`](https://pesde.dev/packages/znotfireman/ethereal_for_plugins)
- :ethereal-wally: wally — [`@znotfireman/et-for-plugins`](https://wally.run/packages/znotfireman/et-for-plugins)
- :ethereal-npm: NPM — [`@rbxts/et-for-plugins`](https://pesde.dev/packages/rbxts/ethereal_for_plugins)

<article class="ethereal-reference-class" markdown>## Ethereal
```luau
type Ethereal = {
    permission: (plugin: Plugin, props: PermissionProps) -> PermissionedApi,
    tryPermission: (plugin: Plugin, props: PermissionProps) -> TryPermissionResult,
}
```
Entry point to the Ethereal for Plugins package.
### <span class="ethereal-reference-function">function</span> permission
```luau
function Ethereal.permission(
    plugin: Plugin,
    props: PermissionProps
): PermissionedApi
```
In order to use any of the Ethereal for Plugins APIs, you must first
explicitly request.
Users will be prompted to allow/deny the plugin for access. This function
will yield until the user responds and will throw if access is denied.
See: `Ethereal.tryPermission`

**Parameters:**

- **plugin** — The plugin that is requesting Ethereal's APIs.

- **props** — Plugin info and the permissions to request.

**Returns:**

- `PermissionedApi` — The permissioned Ethereal for Plugins API.
### <span class="ethereal-reference-function">function</span> tryPermission
```luau
function Ethereal.tryPermission(
    plugin: Plugin,
    props: PermissionProps
): TryPermissionResult
```
In order to use any of the Ethereal for Plugins APIs, you must first
explicitly request.
Users will be prompted to allow/deny the plugin for access. This function
will yield until the user responds and returns a result object.
See: `Ethereal.permission`

**Parameters:**

- **plugin** — The plugin that is requesting Ethereal's APIs.

- **props** — Plugin info and the permissions to request.

**Returns:**

- `TryPermissionResult` — The result of requesting the plugin.
</article>
<article class="ethereal-reference-class" markdown>## Lib
```luau
type Lib = {
    tower: (self: Lib) -> Tower?,
    action: (self: Lib, props: ActionProps) -> Action,
}
```
Tool library.
Every Tool `init` function receives the `Lib`, which enables interacting
with the current selected tower and the Ethereal plugin.
Certain APIs require permissions requested from `Ethereal.permission` or
`Ethereal.tryPermission`.
### <span class="ethereal-reference-function">function</span> tower
```luau
function Lib.tower(
    self: Lib
): Tower?
```
Returns the selected tower if any.

**Returns:**

- `Tower?` — The selected Tower object.
### <span class="ethereal-reference-function">function</span> action
```luau
function Lib.action(
    self: Lib,
    props: ActionProps
): Action
```
Creates a new action. Actions are functions activated as buttons in the tool
listings.

**Parameters:**

- **props** — Construction properties.

**Returns:**

- `Action` —
### <span class="ethereal-reference-type">type</span> ActionProps
```luau
export type ActionProps = {
    label: string,
}
```
Properties for creating actions.

- **label** — The label used for the action button.
### <span class="ethereal-reference-type">type</span> TowerObbyInstance
```luau
export type TowerObbyInstance = {
    WinPad: BasePart,
}
```
The Obby folder in an Eternal Towers of Hell tower.

- **WinPad** — When touched finishes a player's run of the tower.
### <span class="ethereal-reference-type">type</span> TowerInstance
```luau
export type TowerInstance = {
    ClientSidedObjects: Instance,
    Obby: TowerObbyInstance,
    Frame: Instance,
    SpawnLocation: BasePart,
}
```
An Eternal Towers of Hell tower instance.

- **ClientSidedObjects** — Contains every ClientObject used in the tower.
- **Obby** — Contains the purism and the tower's winpad
- **Frame** — The frame of the tower.
- **SpawnLocation** — Where the player will spawn.
</article>
