package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/* Creates a movie quote and sends it to server*/
@WebServlet("/MovieQuotes")
public class MovieQuotesServlet extends HttpServlet {

   private final ArrayList<String> movieQuotes = makeMovieQuotes();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    String json = convertToJsonUsingGson(movieQuotes);
    
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts a movieQuotes instance into a JSON string using the Gson library.
   */
   private String convertToJsonUsingGson(ArrayList<String> movieQuotes) {
    Gson gson = new Gson();
    String json = gson.toJson(movieQuotes);
    return json;
  }
  private ArrayList<String> makeMovieQuotes(){
    ArrayList<String> movieQuotes = new ArrayList<String>();
    movieQuotes.add("As A Man, I am Flesh And Blood; I Can Be Ignored, I Can Be Destroyed. But As A Symbol... As A Symbol I Can Be Incorruptible. I Can Be Everlasting.");
    movieQuotes.add("to infinity and beyond!");
    movieQuotes.add("Carpe diem. Seize the day, boys.");
    return movieQuotes;

  }
}
