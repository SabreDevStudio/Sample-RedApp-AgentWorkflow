/*
 * © 2011 Sabre Inc. All rights reserved.
 * 
 * THE SOFTWARE, SAMPLE CODES AND ANY COMPILED PROGRAMS CREATED USING THE
 * SOFTWARE ARE FURNISHED "AS IS" WITHOUT WARRANTY OF ANY KIND, INCLUDING BUT
 * NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY SABRE,
 * ITS AGENTS OR EMPLOYEES SHALL CREATE A WARRANTY OR IN ANY WAY INCREASE THE
 * SCOPE OF THIS WARRANTY, AND YOU MAY NOT RELY ON ANY SUCH INFORMATION OR
 * ADVICE. SABRE DOES NOT WARRANT, GUARANTEE, OR MAKE ANY REPRESENTATIONS
 * REGARDING THE USE, OR THE RESULTS OF THE USE, OF THE SOFTWARE, COMPILED
 * PROGRAMS CREATED USING THE SOFTWARE, OR WRITTEN MATERIALS IN TERMS OF
 * CORRECTNESS, ACCURACY, RELIABLITY, CURRENTNESS, OR OTHERWISE. THE ENTIRE RISK
 * AS TO THE RESULTS AND PERFORMANCE OF THE SOFTWARE AND ANY COMPILED
 * APPLICATIONS CREATED USING THE SOFTWARE IS ASSUMED BY YOU. BY YOUR USE, YOU
 * AGREE THAT NEITHER SABRE NOR ANYONE ELSE WHO HAS BEEN INVOLVED IN THE
 * CREATION, PRODUCTION OR DELIVERY OF THE SOFTWARE SHALL BE LIABLE FOR ANY
 * DIRECT, INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES (INCLUDING DAMAGES FOR
 * LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS
 * INFORMATION, AND THE LIKE) ARISING OUT OF THE USE OF OR INABILITY TO USE SUCH
 * PRODUCT EVEN IT SABRE HAS BEEN ADVISED OF THE POSSIBLITY OF SUCH DAMAGES.
 * THIS SOFTWARE IS OWNED AND COPYRIGHTED BY SABRE OR ITS THIRD PARTY SUPPLIERS.
 * YOUR LICENSE TO UTILIZE IT CONFERS NO OWNERSHIP RIGHTS IN THE SOFTWARE OR
 * THOSE PORTIONS YOU MAY USE IN A PROJECT. YOU AGREE TO INDEMNIFY AND HOLD
 * HARMLESS SABRE AND ITS AFFILIATES FOR ANY CLAIM BROUGHT AGAINST IT BASED UPON
 * YOUR USE OF THE SOFTWARE OR ANY COMPILED PROGRAMS CREATED USING THE SOFTWARE
 */
package com.sabre.tn.redapp.example.workflow;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.osgi.framework.BundleContext;

import com.sabre.edge.cf.core.token.IAuthenticationTokenService;
import com.sabre.edge.platform.core.common.plugin.base.AbstractEdgeBasePlugin;




/**
 * The activator class controls the plug-in life cycle
 */
public class Activator extends AbstractEdgeBasePlugin {

	// The plug-in ID
	public static final String PLUGIN_ID = "com.sabre.tn.redapp.example.workflow";

	// The plug-in name
	public static final String PLUGIN_NAME = "ShowCase RedApp";
	
	public static final String REDAPP_ID = "5bL09l4OQk-0KlGdzId9tg";

	// The shared instance
	private static Activator plugin;

	private TravelProfile currentProfile;
	/**
	 * {@inheritDoc}
	 */
	public void start(BundleContext context) throws Exception {
		super.start(context);
		plugin = this;
		currentProfile = new TravelProfile();
	}

	/**
	 * {@inheritDoc}
	 */
	public void stop(BundleContext context) throws Exception {
		plugin = null;
		super.stop(context);
	}

	/**
	 * Returns the shared instance
	 * 
	 * @return the shared instance
	 */
	public static Activator getDefault() {
		
		return plugin;
	}
	
	public TravelProfile getTravelProfile(){
		return currentProfile;
	}
	
	public String getToken(){
		IAuthenticationTokenService tkService = getDefault().getServiceReference(IAuthenticationTokenService.class);
		return tkService.getToken();
		
	}
}
