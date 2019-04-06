package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	@Before(order=0)
	public void setUP(){
		System.out.println("launch FF");
		System.out.println("Enter URL for Free CRM APP");
	}

	@After(order=0)
	public void tearDown(){
		System.out.println("close the browser");
	}
	
	@Before(order=1)
	public void setUP1(){
		System.out.println("launch FF");
		System.out.println("Enter URL for Free CRM APP");
	}

	@After(order=1)
	public void tearDown1(){
		System.out.println("close the browser");
	}
	
	@Before("@First")
	public void beforeFirst(){
		System.out.println("before only first scenario");
	}
	
	@After("@First")
	public void afterFirst(){
		System.out.println("after only first sceanrio");
	}
	
	@Before("@Second")
	public void beforeSecond(){
		System.out.println("before only second scenario");
	}
	
	@After("@Second")
	public void afterSecond(){
		System.out.println("after only second sceanrio");
	}
	
	@Before("@Third")
	public void beforeThird(){
		System.out.println("before only third scenario");
	}
	
	@After("@Third")
	public void afterThird(){
		System.out.println("after only third sceanrio");
	}
	
	
	@Given("^flip cart url is loaded$")
	public void this_is_the_first_step() throws Throwable {
		System.out.println("1st step");
	}

	@When("^verify the flipcart title$")
	public void this_is_the_second_step() throws Throwable {
		System.out.println("2nd step");
	}

	@Then("^search criteria is \"(.*)\"$")
	public void this_is_the_third_step(String search) throws Throwable {
		System.out.println("3rd step "+search);
	}
	
	@Then("^filter brand search \"(.*)\" and \"(.*)\"$")
	public void this_is_the_fourth_step(String brandkey, String brandvalue) throws Throwable {
		System.out.println("3rd step "+brandkey+" and "+brandvalue);
	}
	
	@Then("^filter ram value \"(.*)\"$")
	public void this_is_the_fifth_step(String ramkey) throws Throwable {
		System.out.println("3rd step "+ramkey);
	}
	
	
	

}
