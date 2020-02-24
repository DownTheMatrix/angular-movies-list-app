import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { movies } from "../movies";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.css"]
})
export class MoviesListComponent implements OnInit, AfterViewInit {

  @ViewChild("addMovieInput", {static: false}) addMovieInput;

  movies = movies;

  faExternalLinkAlt = faExternalLinkAlt;

  searchText: string;

  ngOnInit() {

  }

   ngAfterViewInit() {

  }

  /* Methods */
  addMovie() {
    window.alert("Add movie");
    console.log(this);
  }
}
