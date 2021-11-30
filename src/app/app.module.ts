import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { DefaultContentComponent } from './components/default-content/default-content.component';
import { FileViewComponent } from './common/components/file-view/file-view.component';
import { CodeEditorComponent } from './common/components/code-editor/code-editor.component';
import { DialogComponent } from './common/components/dialog/dialog.component';
import { EditorControlService } from './services/EditorControl.service';
import { FileDeleteService } from './services/FileDelete.service';
import { PatternButtonComponent } from './components/pattern-button/pattern-button.component';
import { PageControlService } from './services/PageControl.service';
import { StateChangeService } from './services/StateChange.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ToolbarComponent,
    ContentComponent,
    DefaultContentComponent,
    FileViewComponent,
    CodeEditorComponent,
    DialogComponent,
    PatternButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTreeModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    EditorControlService,
    FileDeleteService,
    PageControlService,
    StateChangeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
