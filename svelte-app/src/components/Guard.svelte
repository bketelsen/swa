<script>
    import {state,getUserInfo} from '../store';
    import { onMount } from 'svelte';
    export let user = state.user;

    
   onMount(async () => await getUserInfo());

</script>


<div>
    {#if ($user !== null)}
	    <slot name="authenticated">Welcome to the show</slot>
    {:else}
        <slot name="noauth">
        I bet if you <a href="/.auth/login/github">Login</a> you'd see more here.
        </slot>
    {/if}
</div>