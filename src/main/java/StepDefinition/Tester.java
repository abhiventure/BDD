package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Tester {
	WebDriver driver;

	@Given("^Open the Firefox and launch the application$")
	public void open_the_Firefox_and_launch_the_application() throws Throwable {
		  System.setProperty("webdriver.chrome.driver", "C://Users//KETANJANA//workspace//CucumberWithSelenium2//utility//chromedriver.exe");					
	       driver= new ChromeDriver();					
	       driver.manage().window().maximize();			
	       driver.get("http://demo.guru99.com/v4");	
	}

	@When("^Enter the Username User(\\d+)and Password password(\\d+)$")			
	    public void enter_the_Username_and_Password(String username,String password) throws Throwable 							
	    {		
	       driver.findElement(By.name("uid")).sendKeys(username);					
	       driver.findElement(By.name("password")).sendKeys(password);					
	    }

	@Then("^Reset the credential$")
	public void reset_the_credential() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("btnReset")).click();
		driver.quit();
	}
	
	



}
