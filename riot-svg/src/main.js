import { register, mount, component } from 'riot';
import AppComponent from './app-component';

register('app-component', AppComponent)
mount('[is=app-component]')
