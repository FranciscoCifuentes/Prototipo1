import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    standalone: true,
    imports: [CommonModule, MenubarModule]
})
export class NavbarComponent {
    @Output() moduloSeleccionado = new EventEmitter<string>();

    items: MenuItem[] = [
        {
            label: 'Postfallo',
            icon: 'pi pi-bars',
            items: [
                {
                    label: 'Gestión de sentencias',
                    icon: 'pi pi-list',
                    command: () => this.seleccionarModulo('gestion-sentencias')
                }
            ]
        }
    ];

    seleccionarModulo(modulo: string) {
        this.moduloSeleccionado.emit(modulo);
    }
}
