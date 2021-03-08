package com.google.sps.servlets;

import java.io.IOException;
import java.util.Random;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/fact")
public class RandomFactServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String[] facts = {"I am Colombian 😎", "I know Python,Java,C(Not an expert though)", "Demon Slayer is my favorite anime", "I love food...", "I like coding hehehe" ,
    "I am double jointed in my fingers", "I'm highly interested in machine learning/deep learning", "Hey you landed on the special fact that you're cool"};

    Random rand = new Random();    

    int index = rand.nextInt(facts.length);
    String fact = facts[index];
    response.setContentType("text/html;");
    response.getWriter().println(fact);
  }
}