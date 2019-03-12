import { AppComponent } from "./app.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { BrowserModule, By } from "@angular/platform-browser";
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";
import { async } from "q";

describe("Component AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        HttpClientModule,
        AgGridModule.withComponents([])
      ],
      providers: []
    });
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    // When using gridDebugEl on inspection it has no children
    let gridDebugEl = fixture.debugElement.query(By.css(".ag-theme-balham"));

    // Works fine using css queries
    let gridEl = document.querySelector(".ag-theme-balham");
    let rootWrapper = gridEl.querySelector(".ag-root-wrapper");

    debugger;
  });

  it("should display ag grid", async(() => {}));
});
