javascript:(function(){
	const w=window, a=w.document, e=a.getElementById('collapsible0');
	if(e){
		const o=new w.DOMParser(),p=new w.XSLTProcessor(),b=w.open('about:blank').document;
		p.importStylesheet(o.parseFromString(`<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
			<xsl:output method="text" encoding="utf-8"/>
			<xsl:template match="*">
				<xsl:value-of select="name()"/>
				<xsl:if test="@*">
					<xsl:text>:{&#x0A;</xsl:text>
					<xsl:for-each select="@*"><xsl:for-each select="ancestor::*"><xsl:text>&#x09;</xsl:text></xsl:for-each><xsl:value-of select="name()" /><xsl:text>:</xsl:text><xsl:value-of select="."/><xsl:if test="position()!=last()"><xsl:text>,</xsl:text></xsl:if><xsl:text>&#x0A;</xsl:text></xsl:for-each>
					<xsl:for-each select="ancestor::*"><xsl:text>&#x09;</xsl:text></xsl:for-each>
					<xsl:text>},</xsl:text>
				</xsl:if>
 				<xsl:if test="child::*|child::text()">
					<xsl:text>:{&#x0A;</xsl:text>
					<xsl:for-each select="child::*|child::text()">
						<xsl:for-each select="ancestor::*"><xsl:text>&#x09;</xsl:text></xsl:for-each>
						<xsl:choose>
							<xsl:when test="self::text()"><xsl:value-of select="normalize-space(.)"/></xsl:when>
							<xsl:otherwise><xsl:apply-templates select="current()"/></xsl:otherwise>
						</xsl:choose>
						<xsl:text>&#x0A;</xsl:text>
					</xsl:for-each>
					<xsl:text>},&#x0A;</xsl:text>
				</xsl:if>
			</xsl:template>
		</xsl:transform>`,'application/xml'));
		b.body.appendChild(b.createElement("pre")).appendChild(p.transformToFragment(o.parseFromString(e.innerText,'application/xml'),a));
	};
})();
