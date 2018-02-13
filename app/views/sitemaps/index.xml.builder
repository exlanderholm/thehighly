xml.tag! 'urlset', 'xmlns' => 'http://www.sitemaps.org/schemas/sitemap/0.9', 'xmlns:image' => 'http://www.google.com/schemas/sitemap-image/1.1', 'xmlns:video' => 'http://www.google.com/schemas/sitemap-video/1.1' do
	@posts.each do |post|
	  xml.url do
	    xml.loc "#{root_url}conversations/#{post[:slug]}"
	    xml.changefreq("daily")
        xml.priority "0.7"
	  end
	end
	@destinations.each do |destination|
	  xml.url do
	    xml.loc "#{root_url}recommended/#{destination[:slug]}"
	    xml.changefreq("daily")
        xml.priority "0.7"
	  end
	end
        @pages.each do |page|
	  xml.url do
	    xml.loc "#{root_url}#{page}"
	    xml.changefreq("daily")
        xml.priority "0.7"
	  end
	end

end
