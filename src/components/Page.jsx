import ArrayComponent from "./array/ArrayComponent";
import DebounceComponent from "./debounce/DebounceComponent";
import TimeoutComponent from "./timeout/TimeoutComponent";
import ToggleComponent from "./toggle/ToggleComponent";
import UpdateEffectComponent from "./updateEffect/UpdateEffectComponent";

export default function Page() {
    return <>
        <h1 style={{ borderBottom: '4px solid red', marginBottom: '55px' }} >React Custom Hooks</h1>
        <br />
        {/* <ToggleComponent /> */}
        {/* <TimeoutComponent /> */}
        {/* <DebounceComponent /> */}
        {/* <UpdateEffectComponent /> */}
        <ArrayComponent />
    </>
}